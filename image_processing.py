import cv2
import numpy as np
from matplotlib import pyplot as plt

# Read the image
image_path = r"C:\Users\praneeth P K\Desktop\skillbridgeai2.0\demo1.png"
original_image = cv2.imread(image_path)

if original_image is None:
    print(f"Error: Cannot load image from path: {image_path}")
    exit()

# Convert to grayscale
gray_image = cv2.cvtColor(original_image, cv2.COLOR_BGR2GRAY)

# Convert to black and white
_, bw_image = cv2.threshold(gray_image, 128, 255, cv2.THRESH_BINARY)

# Calculate the histogram
hist = cv2.calcHist([gray_image], [0], None, [256], [0, 256])

# Plot the histogram first with axis labels visible
plt.figure(figsize=(8, 6))
plt.plot(hist)
plt.title('Histogram of Grayscale Image')
plt.xlabel('Pixel Intensity')
plt.ylabel('Frequency')
plt.grid(True)
plt.tight_layout()
plt.show()

# Apply mean filter
mean_kernel = np.ones((3, 3), np.float32) / 9
mean_filtered = cv2.filter2D(gray_image, -1, mean_kernel)

# Apply average filter
avg_filtered = cv2.blur(gray_image, (3, 3))

# Add salt-and-pepper noise
def add_salt_pepper_noise(image, amount=0.02):
    noisy = np.copy(image)
    num_salt = np.ceil(amount * image.size * 0.5)
    num_pepper = np.ceil(amount * image.size * 0.5)

    # Add salt noise
    coords = [np.random.randint(0, i - 1, int(num_salt)) for i in image.shape]
    noisy[coords[0], coords[1]] = 255

    # Add pepper noise
    coords = [np.random.randint(0, i - 1, int(num_pepper)) for i in image.shape]
    noisy[coords[0], coords[1]] = 0

    return noisy

sp_noisy = add_salt_pepper_noise(gray_image)
sp_denoised = cv2.medianBlur(sp_noisy, 3)

# Add uniform noise
def add_uniform_noise(image, intensity=20):
    uniform_noise = np.random.uniform(-intensity, intensity, image.shape).astype(np.uint8)
    return cv2.add(image, uniform_noise)

uniform_noisy = add_uniform_noise(gray_image)
uniform_denoised = cv2.GaussianBlur(uniform_noisy, (3, 3), 0)

# Add Gaussian noise
def add_gaussian_noise(image, mean=0, sigma=25):
    gaussian = np.random.normal(mean, sigma, image.shape).astype(np.uint8)
    return cv2.add(image, gaussian)

gaussian_noisy = add_gaussian_noise(gray_image)
gaussian_denoised = cv2.GaussianBlur(gaussian_noisy, (3, 3), 0)

# Create a combined image with all transformations
def stack_images_grid(images, labels, img_size=(300, 300), cols=4):
    # Resize each image to the specified size
    resized_images = [cv2.resize(img, img_size) for img in images]
    
    # Create an empty canvas for stacking the images
    rows = (len(resized_images) + cols - 1) // cols  # Calculate number of rows
    stacked_image = np.zeros((rows * img_size[1], cols * img_size[0], 3), dtype=np.uint8)

    # Place images into the canvas
    for i, (img, label) in enumerate(zip(resized_images, labels)):
        row = i // cols
        col = i % cols
        y_offset = row * img_size[1]
        x_offset = col * img_size[0]
        
        # Put the image on the canvas with label
        labeled_img = cv2.putText(np.copy(img), label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
        stacked_image[y_offset:y_offset + img_size[1], x_offset:x_offset + img_size[0]] = labeled_img

    return stacked_image

# Create the list of images and labels
processed_images = [
    original_image,
    cv2.cvtColor(gray_image, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(bw_image, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(mean_filtered, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(avg_filtered, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(sp_noisy.astype(np.uint8), cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(sp_denoised, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(uniform_noisy, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(uniform_denoised, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(gaussian_noisy, cv2.COLOR_GRAY2BGR),
    cv2.cvtColor(gaussian_denoised, cv2.COLOR_GRAY2BGR),
]

labels = [
    "Original", "Grayscale", "Black & White", "Mean Filter", "Average Filter",
    "S&P Noisy", "S&P Denoised", "Uniform Noisy", "Uniform Denoised", 
    "Gaussian Noisy", "Gaussian Denoised"
]

# Stack the images into a grid layout
stacked_images = stack_images_grid(processed_images, labels, img_size=(300, 300), cols=4)

# Display the processed images in a single window
cv2.imshow("Image Processing Pipeline", stacked_images)
cv2.waitKey(0)
cv2.destroyAllWindows()
