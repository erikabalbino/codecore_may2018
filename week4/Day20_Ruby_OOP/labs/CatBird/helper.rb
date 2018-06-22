module HelperMod
  def random_number?
    rand(1..40) % 2 === 0 ? true : false
  end
end