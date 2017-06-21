# == Schema Information
#
# Table name: servers
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ActiveRecord::Base
  validates :name, presence: true

  has_many :subscriptions

  has_many :users, 
  through: :subscriptions
end
