module ApplicationHelper
  def gulp_asset_path(path)
    path = REV_MANIFEST[path] if defined?(REV_MANIFEST)
    "/assets/#{path}"
  end

  ## Render a sprite from the sprite sheet.
  def svgsprite(args)
    svg_class = args[:class] || ""
    """
    <svg class=\"#{svg_class}\">
      <use xlink:href=\"/assets/images/spritesheets/sprites.svg##{args[:id]}\"></use>
    </svg>
    """
  end
end
