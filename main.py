def racetrack1():
    tiles.set_current_tilemap(tilemap("""
        racetrack1
        """))
    controller.move_sprite(Player1, 100, 100)
    controller.move_sprite(player2)
    controller.move_sprite(player3)
    controller.move_sprite(player_4)
    scene.camera_follow_sprite(Player1)

def on_combos_attach_combo():
    racetrack1()
controller.combos.attach_combo("abab", on_combos_attach_combo)

player_4: Sprite = None
player3: Sprite = None
player2: Sprite = None
Player1: Sprite = None
scene.set_background_image(assets.image("""
    startbg
    """))
Player1 = sprites.create(assets.image("""
    p1
    """), SpriteKind.player)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE), Player1)
scaling.scale_by_percent(Player1, 50, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
Player1.set_position(6, 99)
player2 = sprites.create(assets.image("""
    p2
    """), SpriteKind.player)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO), player2)
scaling.scale_by_percent(player2, 50, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
player2.set_position(42, 90)
player3 = sprites.create(assets.image("""
    p3
    """), SpriteKind.player)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.THREE), player3)
scaling.scale_by_percent(player3, 50, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
player3.set_position(79, 95)
player_4 = sprites.create(assets.image("""
    p4
    """), SpriteKind.player)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.FOUR), player_4)
scaling.scale_to_percent(player_4, 150, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
player_4.set_position(140, 104)