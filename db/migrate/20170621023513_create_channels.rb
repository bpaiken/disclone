class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :topic
      t.boolean :direct, null: false, default: false
      t.integer :server_id

      t.timestamps null: false
    end
    add_index :channels, :server_id, unique: true
  end
end
