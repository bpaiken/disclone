class AddIndexToMessages < ActiveRecord::Migration
  def change
    add_index :messages, :user_id
    add_index :messages, :channel_id
  end
end
