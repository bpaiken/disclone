class AddDefaultChannelToServer < ActiveRecord::Migration
  def change
    add_column :servers, :default_id, :integer, null: false 
  end
end