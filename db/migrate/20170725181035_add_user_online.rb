class AddUserOnline < ActiveRecord::Migration
  def change
    add_column :users, :online, :boolean

    User.all.each do |user|
      user.online = false
      user.save
    end
  end
end
