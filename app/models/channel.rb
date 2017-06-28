# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  topic      :string
#  direct     :boolean          default("false"), not null
#  server_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ActiveRecord::Base
  validates :name, presence: true
  # validates :name, uniqueness: { scope: :server_id }
  #add contraint for only one server to be named general

  belongs_to :server
  has_many :messages

  has_many :directs
  has_many :users, through: :directs
end

