# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  avatar_url      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_accessor :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end
  
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password_is? (password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
 
  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
