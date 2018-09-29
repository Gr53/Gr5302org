class CreateUses < ActiveRecord::Migration[5.2]
  def change
    create_table :uses do |t|
      t.string :name_use
      t.string :desc_use
     t.references :user, foreign_key: true
     t.references :material, foreign_key: true

      t.timestamps
    end
  end
end
