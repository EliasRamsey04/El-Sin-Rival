from PIL import Image

def remove_white_bg(image_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # Tolerance for white
    for item in datas:
        # if pixel is mostly white (e.g. RGB all > 220)
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(image_path, "PNG")

remove_white_bg('src/assets/logo.png')
print("Background removed successfully")
