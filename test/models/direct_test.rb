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

require 'test_helper'

class DirectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
