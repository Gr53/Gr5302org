class Material < ApplicationRecord
	#
		has_many :category
		has_many :multimedia, through: :category
	#
		has_many :use
		has_many :user, through: :use
	#
		belongs_to :material_type
end
