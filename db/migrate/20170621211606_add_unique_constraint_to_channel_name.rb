class AddUniqueConstraintToChannelName < ActiveRecord::Migration
  def change
    add_index :channels, [:name, :server_id], unique: true
  end
end
