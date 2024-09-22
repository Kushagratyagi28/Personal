import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'Modal Development for Prediction of Various Oceanic Parameters', description: 'This is a group project of 4 members in which we make a modal that help us to predicit the oceanic parameters which involves leveraging data science techniques to forecast conditions like sea surface temperature, salinity, wave height, and currents. These parameters are crucial for maritime industries, climate studies, and disaster management.The process begins with data collection from various sources, such as satellites, ocean buoys, and remote sensing systems, to capture historical and real-time data. This vast dataset undergoes preprocessing to handle missing values, anomalies, and noise. After cleaning, the data is then used to develop predictive models, commonly utilizing machine learning algorithms like Random Forest, Support Vector Machines, or deep learning models such as Long Short-Term Memory (LSTM) networks..'},
    { name: 'Java Chat Application', description: 'This project is like a communication application in which we can see how the message is transferred between client and server and how they communicate with each other.This application leverages Java’s socket API to establish communication between clients and a central server.In this setup, the server operates on a specific port, continuously listening for incoming client connections. Each client, running the chat application, connects to the server by creating a socket and specifying the server IP address and port number. Once connected, the client can send and receive messages through the established socket.' },
    { name: 'Word Counter Website', description: 'This is a simple word counter website which is made using HTML,CSS and JavaScript in this project we provide an essay as input and the number of characters will be shown on our display as output.' },
  ];
}
