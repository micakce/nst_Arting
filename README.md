### Art Creation With Neural Style Transfer

<<<<<<< HEAD
Neural style transfer consist of transferring the style of one image  to another through the use of Deep Neural Networks. We
a content image (image we are going to transfer the style to) and the style image (image from which we get the style) to generate the
output image, which is the very same content image with the distinctive characteristics of the style image.

For this particular implementation we use Tensorflow framework and the VGG-19 pre-trained model. This project is based on the Programming Assignment
of the Coursera's [Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks/home/welcome) course, but  with
some added features for better understanding (I hope) and better results on the output image. Among those features is the possibility of using more 
than one style image as we are going to see below.

The notebook is very self-explanatory so we are going to jump right to the results we obtained:



|content||style||output|
|:---:|:---:|:---:|:---:|:---:|
|<img alt="Casa Rosada" src="./content_images/casa_rosada.jpg" width=400>|+|<img alt="Tree House Style" src="./style_images/tree_house.png"width=400>| = |<img alt="OutputImage" src="./output/casa_rosa+house_tree-layer_1-3.1.jpg"width=400>|
|<img alt="Casa Rosada" src="./content_images/casa_rosada.jpg"width=400>|+|<img alt="Tree House Style" src="./style_images/tree_house.png"width=400><img alt="Tree House Style" src="./style_images/style_3.jpg"width=400>| = |<img alt="OutputImage" src="./output/casa_rosa+house_tree.5+devil.5-layer_1-3.1_500epochs.png"width=400>|
|<img alt="Waterfall" src="./content_images/waterfall.jpg"width=400>|+|<img alt="Starry Night Comic" src="./style_images/starry_night_comic.jpg"width=400>| = |<img alt="OutputImage" src="./output/cascade+starry_night_comic-layer1-3.1_800epochs.jpg"width=400>|
|<img alt="Waterfall" src="./content_images/waterfall.jpg"width=400>|+|<img alt="Starry Night Comic" src="./style_images/starry_night_comic.jpg"width=400><img alt="Dripping Colors" src="./style_images/dripping_colors.jpg"width=400>| = |<img alt="OutputImage" src="./output/cascade+starry_night_comic.5+dripping_colors.5-layer1-3.1_2500epochs.jpg"width=400>|
