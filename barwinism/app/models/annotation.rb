class Annotation < ApplicationRecord
  belongs_to :user
  belongs_to :track
end
