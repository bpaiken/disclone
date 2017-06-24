class AddAttachmentAvatarToServers < ActiveRecord::Migration
  def self.up
    change_table :servers do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :servers, :avatar
  end
end
