class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.string :name_visit
      t.string :desc_visit
      t.date :date
      t.references :user, foreign_key: true
      t.references :recycling_center, foreign_key: true
      
      t.timestamps
    end
  end
end
