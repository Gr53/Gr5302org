class CreatePlatforms < ActiveRecord::Migration[5.2]
  def change
    create_table :platforms do |t|
      t.string :name_platform
      t.string :desc_platform
      t.references :user, foreign_key: true
      t.references :multimedia, foreign_key: true

      t.timestamps
    end
  end
end
