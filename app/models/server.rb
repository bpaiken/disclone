# == Schema Information
#
# Table name: servers
#
#  id                  :integer          not null, primary key
#  name                :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  default_id          :integer          not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class Server < ActiveRecord::Base
  validates :name, :default_id, presence: true
  
  has_attached_file :avatar, default_url: "default_icon.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  
  has_many :channels
  
  has_many :subscriptions

  has_many :users, 
  through: :subscriptions
end
