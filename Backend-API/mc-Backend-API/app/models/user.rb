class User < ApplicationRecord
 	#
 		has_many :use
 		has_many :material, through: :use
 	#
 		has_many :visit
  		has_many :recycling_center, through: :visit
  	#
  		has_many :platform
  		has_many :multimedium, through: :platform
  	#
  		belongs_to :role
  	#
end
