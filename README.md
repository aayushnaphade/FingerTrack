# **FingerTrack🔐: Automated Fingerprint Attendance Management System**

> The Advanced Fingerprint Attendance System is a sophisticated solution that integrates biometric fingerprint recognition, Internet of Things (IoT) technology, and web-based applications to streamline attendance tracking processes. Designed with a modular architecture and leveraging open-source technologies, the system offers cost-efficiency and scalability, making it suitable for a wide range of organizations, including educational institutions, corporate offices, government agencies, and healthcare facilities.

## *Key Features*
* **Biometric Fingerprint Recognition:** Ensures accurate and reliable identification of individuals, minimizing errors and eliminating proxy attendance.
* **Real-time Monitoring and Feedback:** Provides instant updates on attendance status, enabling timely interventions and decision-making.
* **Modular Design:** Allows for flexible expansion and customization according to specific requirements.
+ **Open-Source Technologies:** Utilizes open-source hardware components and software frameworks to reduce costs and dependencies on proprietary solutions.
+ **Scalability:** Can scale seamlessly to accommodate growing numbers of users, devices, and data volumes.
## *Benefits*
* **Cost-Efficiency:** Avoids proprietary solutions and paid services, reducing upfront investment and ongoing expenses.
* **Flexibility:** Easily customizable and adaptable to suit specific use cases and organizational requirements.
* **Scalability:** Grows alongside the organization, accommodating increasing workload and user demands without sacrificing performance.

## Target Audience
Educational institutions, corporate offices, government agencies, and healthcare facilities seeking a reliable, cost-effective, and scalable solution for attendance tracking.

---
# Hardware requirements

1. R307 (1000/300 Finger Capacity).
2. ESP32.
3. RasberryPi Zero with Raspbain OS installed.

## Connection Block Diagram
* **This is just Basic Diagram** 

![Screenshot 2024-02-14 142518](https://hackmd.io/_uploads/HJIoTB5jT.png)

* **Nd here is another circuite desgin** 

![Screenshot 2024-02-14 143443](https://hackmd.io/_uploads/rk-C1Icop.png)
****The Board in Middle is ESP32 Dev Kit v1***

## Some Useful Links
| External Route                          | Description                         |
|--------------------------------|-------------------------------------|
| http://172.25.160.11:8788/     | **~HB6-RPI-ZERO-SERVER**            |
| http://172.25.160.11:9022/     | **~HB6-NODE-DASHBOARD**             |
| http://172.25.160.11:9022/update | **~HB6-NODE-OTA**                  |
| http://172.25.224.11:9022/update | **~HB8-NODE-OTA**                  |
| http://172.25.224.11:9022/     | **~HB8-NODE-DASHBOARD**            |


| Internal Route                          | Description                         |
|--------------------------------|-------------------------------------|
| http://192.168.0.173:1880/     | **~HB6-RPI-ZERO-SERVER && CURRENTLY ALSO FOR THE HB8** |
| http://192.168.0.107/          | **~HB6-NODE-DASHBOARD**             |
| http://192.168.0.107/update    | **~HB6-NODE-OTA**                   |
| http://192.168.0.107/          | **~HB8-NODE-DASHBOARD**             |
| http://192.168.0.107/update    | **~HB8-NODE-OTA**                   |


This repository accompanies the paper:

Aayush Naphade, Kaustubh Shivshankar Shejole. FingerTrack: Fingerprint-Based Automated Check-In/Check-Out Monitoring System. TechRxiv. September 15, 2025.

---
### Citation
```
 @article{Naphade_2025,
title={FingerTrack: Fingerprint-Based Automated Check-In/Check-Out Monitoring System},
url={http://dx.doi.org/10.36227/techrxiv.175790836.67744558/v1},
DOI={10.36227/techrxiv.175790836.67744558/v1},
publisher={Institute of Electrical and Electronics Engineers (IEEE)},
author={Naphade, Aayush and Shejole, Kaustubh Shivshankar},
year={2025},
month=sep }
```

