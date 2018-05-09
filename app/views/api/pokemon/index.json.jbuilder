@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    #we use the asset_path helper to find the correct path to the image.
    #Asset locations can be different in production so you should always use asset_path rather than a literal path.
    json.image_url asset_path(poke.image_url)
  end
end
