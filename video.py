import cv2
import numpy as np

# Initialize the webcam (0 is the default camera)
cap = cv2.VideoCapture(0)

# Check if the webcam is opened successfully
if not cap.isOpened():
    print("Error: Could not open webcam.")
    exit()

print("Webcam is successfully opened!")

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Check if the frame was read correctly
    if not ret:
        print("Error: Failed to grab frame.")
        break

    # Get the frame's shape (height, width, channels)
    height, width, channels = frame.shape
    print(f"Frame Details - Height: {height}, Width: {width}, Channels: {channels}")

    # Convert the frame to grayscale (optional)
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Show the original frame and the grayscale frame
    cv2.imshow('Original Webcam Feed', frame)
    cv2.imshow('Grayscale Webcam Feed', gray_frame)

    # Break the loop if the 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()
