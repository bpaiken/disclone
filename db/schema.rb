# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170725183744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string   "name",                       null: false
    t.string   "topic"
    t.boolean  "direct",     default: false, null: false
    t.integer  "server_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "channels", ["name", "server_id"], name: "index_channels_on_name_and_server_id", unique: true, using: :btree
  add_index "channels", ["server_id"], name: "index_channels_on_server_id", using: :btree

  create_table "directs", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "directs", ["channel_id"], name: "index_directs_on_channel_id", using: :btree
  add_index "directs", ["user_id"], name: "index_directs_on_user_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.string   "body",       null: false
    t.integer  "channel_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "servers", force: :cascade do |t|
    t.string   "name",                null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "default_id",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "servers", ["name"], name: "index_servers_on_name", unique: true, using: :btree

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "server_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "subscriptions", ["server_id"], name: "index_subscriptions_on_server_id", using: :btree
  add_index "subscriptions", ["user_id"], name: "index_subscriptions_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                            null: false
    t.string   "password_digest",                     null: false
    t.string   "session_token",                       null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.boolean  "online",              default: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
