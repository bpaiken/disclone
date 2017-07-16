class Api::UsersController < ApplicationController
  
  def index 
    @users = User.all
    render "api/users/index"
  end
  
  def show
    @user = User.find(params[:id])
  
    render 'api/sessions/show'
  end


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/sessions/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render "api/users/update"
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
