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
|![Casa Rosada](./content_images/casa_rosada.jpg)|+|![Tree House Style](./style_images/tree_house.png)| = |![Output Image](./output/casa_rosa+house_tree-layer_1-3.1.jpg)|
|![Casa Rosada](./content_images/casa_rosada.jpg)|+|![Tree House Style](./style_images/tree_house.png) ![Espanta Pájaros](./style_images/style_3.jpg)| = |![Output Image](./output/casa_rosa+house_tree.5+devil.5-layer_1-3.1_500epochs.png)|
|![Waterfall](./content_images/waterfall_rainbow.jpg)|+|![Starry Night Comic](./style_images/starry_night_comic.jpg)| = |![Output Image](./output/cascade+starry_night_comic-layer1-3.1_800epochs.jpg)|
|![Waterfall](./content_images/waterfall_rainbow.jpg)|+|![Starry Night Comic](./style_images/starry_night_comic.jpg)![Dripping Colors Style](./style_images/dripping_colors.jpg)| = |![Output Image](./output/cascade+starry_night_comic.5+dripping_colors.5-layer1-3.1_2500epochs.jpg)|
|<img src="https://github.com/micakce/nst_Arting/blob/master/style_images/brussel_street.jpg" alt="Brussel" width=100% />|+|<img src="https://github.com/micakce/nst_Arting/blob/master/style_images/the_scream.jpg" alt="Scream" width=100%>| = |<img src="https://github.com/micakce/nst_Arting/blob/master/style_images/the_scream.jpg" alt="Output" />|
