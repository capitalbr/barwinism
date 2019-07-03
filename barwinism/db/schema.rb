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

ActiveRecord::Schema.define(version: 2019_07_03_174757) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.string "cover_art_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
    t.index ["title"], name: "index_albums_on_title", unique: true
  end

  create_table "annotations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "track_id", null: false
    t.string "body", null: false
    t.integer "upvotes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "anno_id", null: false
    t.index ["track_id"], name: "index_annotations_on_track_id"
    t.index ["upvotes"], name: "index_annotations_on_upvotes"
    t.index ["user_id"], name: "index_annotations_on_user_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "bio"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_artists_on_name", unique: true
  end

  create_table "track_album_joins", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "album_id", null: false
    t.index ["track_id", "album_id"], name: "index_track_album_joins_on_track_id_and_album_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "artist_id", null: false
    t.integer "album_id"
    t.string "song_art_url"
    t.string "header_background_url"
    t.string "sound_cloud_url"
    t.string "youtube_url"
    t.string "primary_tag", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index ["album_id"], name: "index_tracks_on_album_id"
    t.index ["artist_id"], name: "index_tracks_on_artist_id"
    t.index ["primary_tag"], name: "index_tracks_on_primary_tag"
    t.index ["title"], name: "index_tracks_on_title", unique: true
    t.index ["user_id"], name: "index_tracks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "avatar"
    t.string "cover_art"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
