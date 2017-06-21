# == Schema Information
#
# Table name: directs
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Direct < ActiveRecord::Base
  validates :user_id, :channel_id, null: false

  belongs_to :user 

  belongs_to :channel
end
