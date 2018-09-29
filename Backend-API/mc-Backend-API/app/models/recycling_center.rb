class RecyclingCenter < ApplicationRecord
	#
		has_many :visit
		has_many :user, through: :visit
end
