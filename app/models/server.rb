# == Schema Information
#
# Table name: servers
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  default_id :integer          not null
#

class Server < ActiveRecord::Base
  validates :name, :default_id, presence: true
  
  has_attached_file :avatar, styles: { medium: "300x300>", icon: "50x50>",  }, default_url: "default_server.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  
  has_many :channels
  
  has_many :subscriptions

  has_many :users, 
  through: :subscriptions
end
