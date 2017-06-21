class CreateDirects < ActiveRecord::Migration
  def change
    create_table :directs do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps null: false
    end
    add_index :directs, :user_id
    add_index :directs, :channel_id
    add_index :subscriptions, :user_id
    add_index :subscriptions, :server_id
  end
end
