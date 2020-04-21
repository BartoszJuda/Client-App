import { MainService } from './../main.service';
import { LinkService } from './../shared/link.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { LinkDto } from '../models/link-dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: LinkDto[];
  url = 'http://localhost:8080/api/links/dto';
  Technology = [];
  LinkName = [];
  SubscriptionFee = [];
  barchart =[];
  LinkLength =[];

  constructor(private http: HttpClient,
    private mainService: MainService) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((result: LinkDto[]) =>{
      result.forEach(l => {
        this.Technology.push(l.technology);
        this.LinkName.push(l.linkName);
        this.SubscriptionFee.push(l.subscriptionFee);
        this.LinkLength.push(l.linkLength);
      });
      this
      this.barchart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: this.LinkName,
          datasets: [{
            data: this.SubscriptionFee,
            order: 'doughnut',
            borderColor: '#3cba9F',
            backgroundColor: [
              "#625D5D",
              "#837E7C",
              "#E5E4E2",
              "#3D3C3A",
              "#646D7E",
              "#3EA99F",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Links by Subscription Fee [PLN]'
        },
          legend: {
            display: true,
            position: 'bottom',
                labels: {
                    fontColor: "black",
                    boxWidth: 20,
                    padding: 20
                }
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });

      this.barchart = new Chart('canvas1', {
        type: 'polarArea',
        data: {
          labels: this.LinkName,
          datasets: [{
            data: this.LinkLength,
            borderColor: '#3cba9F',
            backgroundColor: [
              "#625D5D",
              "#837E7C",
              "#E5E4E2",
              "#3D3C3A",
              "#646D7E",
              "#3EA99F",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Links by lenght [km]'
        },
          legend: {
            display: true,
            position: 'bottom',
                labels: {
                    fontColor: "black",
                    boxWidth: 20,
                    padding: 20
                }
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });

      this.barchart = new Chart('canvas2', {
        type: 'line',
        data: {
          labels: this.LinkName,
          datasets: [{
            data: this.SubscriptionFee,
            borderColor: '#3cba9F',
            backgroundColor: [
              "#625D5D",
              "#837E7C",
              "#E5E4E2",
              "#3D3C3A",
              "#646D7E",
              "#3EA99F",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Links by Subscription Fee [PLN] (bar chart)'
        },
          legend: {
            display: false,
            position: 'bottom',
                labels: {
                    fontColor: "#B6B6B4",
                    boxWidth: 20,
                    padding: 20
                }
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'PLN'
              },
            }],
          }
        }
      });

    });
  }

}
