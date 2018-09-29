class Multimedium < ApplicationRecord
	#
		has_many :category
		has_many :material, through: :category
		  #
		has_many :platform
		has_many :user, through: :platform
	#
		belongs_to :multimedia_type
 end
