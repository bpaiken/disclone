class AddDefaultOnlineToUsers < ActiveRecord::Migration
  def change
    change_column :users, :online, :boolean, :default => true
  end
end
