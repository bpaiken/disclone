class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token
    user.online = true
    user.save
    push_user(user)
  end

  def logout(user)
    user.online = false
    push_user(user)
    session[:session_token] = nil
    user.reset_session_token
    user.save
  end

  def logged_in?
    !!current_user
  end

  def push_user(user)
    Pusher.trigger('users', 'newUser', {
      users: {
        user.id => {
          online: user.online
        }
      }
    })
  end
end
