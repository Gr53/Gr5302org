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

ActiveRecord::Schema.define(version: 2018_09_28_093209) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name_category"
    t.string "desc_category"
    t.bigint "material_id"
    t.bigint "multimedia_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["material_id"], name: "index_categories_on_material_id"
    t.index ["multimedia_id"], name: "index_categories_on_multimedia_id"
  end

  create_table "material_types", force: :cascade do |t|
    t.string "name_material_type"
    t.string "desc_material_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "materials", force: :cascade do |t|
    t.string "name_material"
    t.string "desc_material"
    t.integer "id_material_type"
    t.bigint "material_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["material_type_id"], name: "index_materials_on_material_type_id"
  end

  create_table "multimedia", force: :cascade do |t|
    t.string "name_multimedia"
    t.string "desc_multimedia"
    t.integer "id_multimedia_type"
    t.bigint "multimedia_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["multimedia_type_id"], name: "index_multimedia_on_multimedia_type_id"
  end

  create_table "multimedia_types", force: :cascade do |t|
    t.string "name_multimedia_type"
    t.string "desc_multimedia_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "platforms", force: :cascade do |t|
    t.string "name_platform"
    t.string "desc_platform"
    t.bigint "user_id"
    t.bigint "multimedia_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["multimedia_id"], name: "index_platforms_on_multimedia_id"
    t.index ["user_id"], name: "index_platforms_on_user_id"
  end

  create_table "recycling_centers", force: :cascade do |t|
    t.string "nam_recycling_center"
    t.string "desc_recycling_center"
    t.string "address_recycling_center"
    t.string "tel_recycling_center"
    t.string "web_recycling_center"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name_role"
    t.string "desc_role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name_user"
    t.string "lastname_user"
    t.string "tel_user"
    t.string "address_user"
    t.string "email_user"
    t.string "password_digest"
    t.string "age"
    t.bigint "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id"], name: "index_users_on_role_id"
  end

  create_table "uses", force: :cascade do |t|
    t.string "name_use"
    t.string "desc_use"
    t.bigint "user_id"
    t.bigint "material_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["material_id"], name: "index_uses_on_material_id"
    t.index ["user_id"], name: "index_uses_on_user_id"
  end

  create_table "visits", force: :cascade do |t|
    t.string "name_visit"
    t.string "desc_visit"
    t.date "date"
    t.bigint "user_id"
    t.bigint "recycling_center_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recycling_center_id"], name: "index_visits_on_recycling_center_id"
    t.index ["user_id"], name: "index_visits_on_user_id"
  end

  add_foreign_key "categories", "materials"
  add_foreign_key "categories", "multimedia", column: "multimedia_id"
  add_foreign_key "materials", "material_types"
  add_foreign_key "multimedia", "multimedia_types"
  add_foreign_key "platforms", "multimedia", column: "multimedia_id"
  add_foreign_key "platforms", "users"
  add_foreign_key "users", "roles"
  add_foreign_key "uses", "materials"
  add_foreign_key "uses", "users"
  add_foreign_key "visits", "recycling_centers"
  add_foreign_key "visits", "users"
end
