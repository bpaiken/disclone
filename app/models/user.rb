# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  online              :boolean          default("true")
#

class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, uniqueness: true
  after_initialize :ensure_session_token
  after_create :auto_assign
  
  attr_accessor :password

  has_many :subscriptions
  has_many :servers, through: :subscriptions

  has_many :directs
  has_many :channels, through: :directs

  has_many :messages

  has_attached_file :avatar, default_url: "default_icon.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

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
    self.save
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def auto_assign
    user_id = self.id
    1.upto(4) { |server_id| Subscription.create(server_id: server_id, user_id: user_id)}
  end 
end
