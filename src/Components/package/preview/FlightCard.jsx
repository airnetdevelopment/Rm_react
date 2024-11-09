import { useEffect, useState } from "react";
import LineImage from "../../../assets/Iconslatestpackage/icons/Line 2.png";
import pencil from "../../../assets/Iconslatestpackage/icons/pencil.png";
import unchecked from "../../../assets/Iconslatestpackage/icons/unchecked.png";
import { formatDuration } from "../../../utils/formatDuration";


const dummy= [
    {
        "type": "flight",
        "event": {
            "id": "flight-0-1724838288811",
            "title": "Flight: Indira Gandhi International Airport (DEL, India) to Munich Airport (MUC, Germany)",
            "start": "2024-09-13T02:30:00.000Z",
            "end": "2024-09-13T07:30:00.000Z",
            "description": "Airline: Lufthansa, Flight Number: 768",
            "type": "flight",
            "info": {
                "from": "Indira Gandhi International Airport (DEL, India)",
                "to": "Munich Airport (MUC, Germany)",
                "duration": 510,
                "airline": "Lufthansa",
                "flightNumber": "768",
                "departure_time": "2024-09-13T02:30:00",
                "arrival_time": "2024-09-13T07:30:00",
                "origin_airport_type": "large_airport",
                "destination_airport_type": "large_airport"
            },
            "city": "Venice (Italy)",
            "flight_id": "flight-0-1724838288811",
            "destination_city_id": 148463,
            "city_id": 130443,
            "duration": 510,
            "bookable": true
        },
        "availability": "available",
        "searchRes": {
            "FirstNameFormat": null,
            "IsBookableIfSeatNotAvailable": false,
            "IsHoldAllowedWithSSR": false,
            "IsUpsellAllowed": false,
            "LastNameFormat": null,
            "ResultIndex": "OB10[TBO]aG979cN7KK0mlZ6GGyRRAhjrRpXZGy6inHH8N/zujGDQM4JjIkSIa1uy+8nH0konaapRwEy6mI55IftGdxZGO04U8W+MFlcwfyEDNVuiqy+t1mmA/chwijZKk306GLmypyNNOAdrw9WaHckZlsNTCiEM1olS3F3Q8YKvabvi/cGqDa2cnwEqKj7/+gHE4LnyxseJ+xIAIhGIPyijZHZlzlVSx8hKU2uiYKAZtTbbGLK3WK8efBiglGp4hdEUrMA1C2MUfUOKbYpziSQBtuVa9yW0zYEMbsld7C2TLCI8WTD8DDeHW9lh1u4AHuL38X3dfcm/ba4cPN5SNWbY2ymyNzz3JTdUDrUG02Quo4lpz0FuIaru/NF2JXtKFcS9rM9Uk5Jaa9ESB9tsfjYv5QUfPN4UR0Z+eC5HATU9v8bv5sXsgqpQafC+u5es9gr/atbpa3LnaknykfsXXY5bpBsJjiuNpYc1W8Ut8CFBXV2aNs8Js+6M4Ds8myqkO7afLGErb6UUD3zoe1Bxoxp3aUjOj+vpRbGUrS1MO89ufTIEhG7Gg4Xc40ZUNzZ1P9nc5WD3Ws5FiLaDkh30mN5B0CmCGrrVlzKNvi+bqS0GNNuNAYQ=",
            "Source": 4,
            "IsLCC": false,
            "IsRefundable": false,
            "IsPanRequiredAtBook": false,
            "IsPanRequiredAtTicket": false,
            "IsPassportRequiredAtBook": false,
            "IsPassportRequiredAtTicket": false,
            "GSTAllowed": true,
            "IsCouponAppilcable": true,
            "IsGSTMandatory": false,
            "AirlineRemark": null,
            "IsPassportFullDetailRequiredAtBook": false,
            "ResultFareType": "RegularFare",
            "Fare": {
                "Currency": "INR",
                "BaseFare": 23165,
                "Tax": 22459,
                "TaxBreakup": [
                    {
                        "key": "K3",
                        "value": 0
                    },
                    {
                        "key": "YQTax",
                        "value": 14949
                    },
                    {
                        "key": "YR",
                        "value": 1635
                    },
                    {
                        "key": "PSF",
                        "value": 0
                    },
                    {
                        "key": "UDF",
                        "value": 0
                    },
                    {
                        "key": "INTax",
                        "value": 0
                    },
                    {
                        "key": "TransactionFee",
                        "value": 0
                    },
                    {
                        "key": "OtherTaxes",
                        "value": 5875
                    }
                ],
                "YQTax": 14949,
                "AdditionalTxnFeeOfrd": 0,
                "AdditionalTxnFeePub": 0,
                "PGCharge": 0,
                "OtherCharges": 0,
                "ChargeBU": [
                    {
                        "key": "TBOMARKUP",
                        "value": 0
                    },
                    {
                        "key": "GLOBALPROCUREMENTCHARGE",
                        "value": 0
                    },
                    {
                        "key": "CONVENIENCECHARGE",
                        "value": 0
                    },
                    {
                        "key": "OTHERCHARGE",
                        "value": 0
                    }
                ],
                "Discount": 0,
                "PublishedFare": 45624,
                "CommissionEarned": 0,
                "PLBEarned": 0,
                "IncentiveEarned": 0,
                "OfferedFare": 45624,
                "TdsOnCommission": 0,
                "TdsOnPLB": 0,
                "TdsOnIncentive": 0,
                "ServiceFee": 0,
                "TotalBaggageCharges": 0,
                "TotalMealCharges": 0,
                "TotalSeatCharges": 0,
                "TotalSpecialServiceCharges": 0
            },
            "FareBreakdown": [
                {
                    "Currency": "INR",
                    "PassengerType": 1,
                    "PassengerCount": 1,
                    "BaseFare": 23165,
                    "Tax": 22459,
                    "TaxBreakUp": [
                        {
                            "key": "YQTax",
                            "value": 14949
                        },
                        {
                            "key": "YR",
                            "value": 1635
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 5875
                        }
                    ],
                    "YQTax": 14949,
                    "AdditionalTxnFeeOfrd": 0,
                    "AdditionalTxnFeePub": 0,
                    "PGCharge": 0,
                    "SupplierReissueCharges": 0
                }
            ],
            "Segments": [
                [
                    {
                        "Baggage": "1 PC(s)",
                        "CabinBaggage": "Included",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 1,
                        "Airline": {
                            "AirlineCode": "LH",
                            "AirlineName": "Lufthansa",
                            "FlightNumber": "768",
                            "FareClass": "S",
                            "OperatingCarrier": "LH"
                        },
                        "NoOfSeatAvailable": 9,
                        "Origin": {
                            "Airport": {
                                "AirportCode": "DEL",
                                "AirportName": "Indira Gandhi Airport",
                                "Terminal": "",
                                "CityCode": "DEL",
                                "CityName": "Delhi",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "DepTime": "2024-09-13T02:30:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "MUC",
                                "AirportName": "Franz Josef Strauss",
                                "Terminal": "",
                                "CityCode": "MUC",
                                "CityName": "Munich",
                                "CountryCode": "DE",
                                "CountryName": "Germany"
                            },
                            "ArrTime": "2024-09-13T07:30:00"
                        },
                        "Duration": 510,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": null,
                        "StopPointDepartureTime": null,
                        "Craft": "388",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "",
                        "FareClassification": {
                            "Type": ""
                        }
                    },
                    {
                        "Baggage": "1 PC(s)",
                        "CabinBaggage": "Included",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 2,
                        "Airline": {
                            "AirlineCode": "LH",
                            "AirlineName": "Lufthansa",
                            "FlightNumber": "9454",
                            "FareClass": "S",
                            "OperatingCarrier": "EN"
                        },
                        "NoOfSeatAvailable": 9,
                        "Origin": {
                            "Airport": {
                                "AirportCode": "MUC",
                                "AirportName": "Franz Josef Strauss",
                                "Terminal": "2",
                                "CityCode": "MUC",
                                "CityName": "Munich",
                                "CountryCode": "DE",
                                "CountryName": "Germany"
                            },
                            "DepTime": "2024-09-13T08:25:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "VCE",
                                "AirportName": "Marco Polo",
                                "Terminal": "",
                                "CityCode": "VCE",
                                "CityName": "Venice",
                                "CountryCode": "IT",
                                "CountryName": "Italy"
                            },
                            "ArrTime": "2024-09-13T09:25:00"
                        },
                        "AccumulatedDuration": 625,
                        "Duration": 60,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": null,
                        "StopPointDepartureTime": null,
                        "Craft": "E95",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "",
                        "FareClassification": {
                            "Type": ""
                        }
                    }
                ]
            ],
            "LastTicketDate": "31AUG24",
            "TicketAdvisory": "TICKETS ARE NON-REFUNDABLE \nLAST TKT DTE 31AUG24  - SEE ADV PURCHASE \n",
            "FareRules": [
                {
                    "Origin": "DEL",
                    "Destination": "MUC",
                    "Airline": "LH",
                    "FareBasisCode": "SNCOWAA",
                    "FareRuleDetail": "",
                    "FareRestriction": "N",
                    "FareFamilyCode": "",
                    "FareRuleIndex": ""
                },
                {
                    "Origin": "MUC",
                    "Destination": "VCE",
                    "Airline": "LH",
                    "FareBasisCode": "SNCOWAA",
                    "FareRuleDetail": "",
                    "FareRestriction": "Y",
                    "FareFamilyCode": "",
                    "FareRuleIndex": ""
                }
            ],
            "AirlineCode": "LH",
            "ValidatingAirline": "LH",
            "FareClassification": {
                "Color": "lightBlue",
                "Type": "Publish"
            }
        },
        "flightDetails": {
            "flight_id": "flight-0-1724838288811",
            "detail": {
                "from": "Delhi (India)",
                "to": "Venice (Italy)",
                "legs": [
                    {
                        "from": "Indira Gandhi International Airport (DEL, India)",
                        "to": "Munich Airport (MUC, Germany)",
                        "duration": 510,
                        "airline": "Lufthansa",
                        "flightNumber": "768",
                        "departure_time": "2024-09-13T02:30:00",
                        "arrival_time": "2024-09-13T07:30:00",
                        "origin_airport_type": "large_airport",
                        "destination_airport_type": "large_airport"
                    },
                    {
                        "from": "Munich Airport (MUC, Germany)",
                        "to": "Venice Marco Polo Airport (VCE, Italy)",
                        "duration": 60,
                        "airline": "Lufthansa",
                        "flightNumber": "9454",
                        "departure_time": "2024-09-13T08:25:00",
                        "arrival_time": "2024-09-13T09:25:00",
                        "origin_airport_type": "large_airport",
                        "destination_airport_type": "large_airport"
                    }
                ]
            }
        }
    },
    {
        "type": "layover",
        "availability": "exclusive service",
        "event": {
            "id": "flight-0-1724838288811",
            "title": "Waiting: (55 minutes)",
            "start": "2024-09-13T07:30:00.000Z",
            "end": "2024-09-13T08:25:00.000Z",
            "description": "Waiting for 55 minutes",
            "type": "layover",
            "city": "Venice (Italy)",
            "flight_id": "flight-0-1724838288811",
            "destination_city_id": 148463,
            "city_id": 130443
        }
    },
    {
        "type": "flight",
        "event": {
            "id": "flight-0-1724838288811",
            "title": "Flight: Munich Airport (MUC, Germany) to Venice Marco Polo Airport (VCE, Italy)",
            "start": "2024-09-13T08:25:00.000Z",
            "end": "2024-09-13T09:25:00.000Z",
            "description": "Airline: Lufthansa, Flight Number: 9454",
            "type": "flight",
            "info": {
                "from": "Munich Airport (MUC, Germany)",
                "to": "Venice Marco Polo Airport (VCE, Italy)",
                "duration": 60,
                "airline": "Lufthansa",
                "flightNumber": "9454",
                "departure_time": "2024-09-13T08:25:00",
                "arrival_time": "2024-09-13T09:25:00",
                "origin_airport_type": "large_airport",
                "destination_airport_type": "large_airport"
            },
            "city": "Venice (Italy)",
            "flight_id": "flight-0-1724838288811",
            "destination_city_id": 148463,
            "city_id": 130443,
            "duration": 60,
            "bookable": true
        },
        "availability": "available",
        "searchRes": {
            "FirstNameFormat": null,
            "IsBookableIfSeatNotAvailable": false,
            "IsHoldAllowedWithSSR": false,
            "IsUpsellAllowed": false,
            "LastNameFormat": null,
            "ResultIndex": "OB10[TBO]aG979cN7KK0mlZ6GGyRRAhjrRpXZGy6inHH8N/zujGDQM4JjIkSIa1uy+8nH0konaapRwEy6mI55IftGdxZGO04U8W+MFlcwfyEDNVuiqy+t1mmA/chwijZKk306GLmypyNNOAdrw9WaHckZlsNTCiEM1olS3F3Q8YKvabvi/cGqDa2cnwEqKj7/+gHE4LnyxseJ+xIAIhGIPyijZHZlzlVSx8hKU2uiYKAZtTbbGLK3WK8efBiglGp4hdEUrMA1C2MUfUOKbYpziSQBtuVa9yW0zYEMbsld7C2TLCI8WTD8DDeHW9lh1u4AHuL38X3dfcm/ba4cPN5SNWbY2ymyNzz3JTdUDrUG02Quo4lpz0FuIaru/NF2JXtKFcS9rM9Uk5Jaa9ESB9tsfjYv5QUfPN4UR0Z+eC5HATU9v8bv5sXsgqpQafC+u5es9gr/atbpa3LnaknykfsXXY5bpBsJjiuNpYc1W8Ut8CFBXV2aNs8Js+6M4Ds8myqkO7afLGErb6UUD3zoe1Bxoxp3aUjOj+vpRbGUrS1MO89ufTIEhG7Gg4Xc40ZUNzZ1P9nc5WD3Ws5FiLaDkh30mN5B0CmCGrrVlzKNvi+bqS0GNNuNAYQ=",
            "Source": 4,
            "IsLCC": false,
            "IsRefundable": false,
            "IsPanRequiredAtBook": false,
            "IsPanRequiredAtTicket": false,
            "IsPassportRequiredAtBook": false,
            "IsPassportRequiredAtTicket": false,
            "GSTAllowed": true,
            "IsCouponAppilcable": true,
            "IsGSTMandatory": false,
            "AirlineRemark": null,
            "IsPassportFullDetailRequiredAtBook": false,
            "ResultFareType": "RegularFare",
            "Fare": {
                "Currency": "INR",
                "BaseFare": 23165,
                "Tax": 22459,
                "TaxBreakup": [
                    {
                        "key": "K3",
                        "value": 0
                    },
                    {
                        "key": "YQTax",
                        "value": 14949
                    },
                    {
                        "key": "YR",
                        "value": 1635
                    },
                    {
                        "key": "PSF",
                        "value": 0
                    },
                    {
                        "key": "UDF",
                        "value": 0
                    },
                    {
                        "key": "INTax",
                        "value": 0
                    },
                    {
                        "key": "TransactionFee",
                        "value": 0
                    },
                    {
                        "key": "OtherTaxes",
                        "value": 5875
                    }
                ],
                "YQTax": 14949,
                "AdditionalTxnFeeOfrd": 0,
                "AdditionalTxnFeePub": 0,
                "PGCharge": 0,
                "OtherCharges": 0,
                "ChargeBU": [
                    {
                        "key": "TBOMARKUP",
                        "value": 0
                    },
                    {
                        "key": "GLOBALPROCUREMENTCHARGE",
                        "value": 0
                    },
                    {
                        "key": "CONVENIENCECHARGE",
                        "value": 0
                    },
                    {
                        "key": "OTHERCHARGE",
                        "value": 0
                    }
                ],
                "Discount": 0,
                "PublishedFare": 45624,
                "CommissionEarned": 0,
                "PLBEarned": 0,
                "IncentiveEarned": 0,
                "OfferedFare": 45624,
                "TdsOnCommission": 0,
                "TdsOnPLB": 0,
                "TdsOnIncentive": 0,
                "ServiceFee": 0,
                "TotalBaggageCharges": 0,
                "TotalMealCharges": 0,
                "TotalSeatCharges": 0,
                "TotalSpecialServiceCharges": 0
            },
            "FareBreakdown": [
                {
                    "Currency": "INR",
                    "PassengerType": 1,
                    "PassengerCount": 1,
                    "BaseFare": 23165,
                    "Tax": 22459,
                    "TaxBreakUp": [
                        {
                            "key": "YQTax",
                            "value": 14949
                        },
                        {
                            "key": "YR",
                            "value": 1635
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 5875
                        }
                    ],
                    "YQTax": 14949,
                    "AdditionalTxnFeeOfrd": 0,
                    "AdditionalTxnFeePub": 0,
                    "PGCharge": 0,
                    "SupplierReissueCharges": 0
                }
            ],
            "Segments": [
                [
                    {
                        "Baggage": "1 PC(s)",
                        "CabinBaggage": "Included",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 1,
                        "Airline": {
                            "AirlineCode": "LH",
                            "AirlineName": "Lufthansa",
                            "FlightNumber": "768",
                            "FareClass": "S",
                            "OperatingCarrier": "LH"
                        },
                        "NoOfSeatAvailable": 9,
                        "Origin": {
                            "Airport": {
                                "AirportCode": "DEL",
                                "AirportName": "Indira Gandhi Airport",
                                "Terminal": "",
                                "CityCode": "DEL",
                                "CityName": "Delhi",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "DepTime": "2024-09-13T02:30:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "MUC",
                                "AirportName": "Franz Josef Strauss",
                                "Terminal": "",
                                "CityCode": "MUC",
                                "CityName": "Munich",
                                "CountryCode": "DE",
                                "CountryName": "Germany"
                            },
                            "ArrTime": "2024-09-13T07:30:00"
                        },
                        "Duration": 510,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": null,
                        "StopPointDepartureTime": null,
                        "Craft": "388",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "",
                        "FareClassification": {
                            "Type": ""
                        }
                    },
                    {
                        "Baggage": "1 PC(s)",
                        "CabinBaggage": "Included",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 2,
                        "Airline": {
                            "AirlineCode": "LH",
                            "AirlineName": "Lufthansa",
                            "FlightNumber": "9454",
                            "FareClass": "S",
                            "OperatingCarrier": "EN"
                        },
                        "NoOfSeatAvailable": 9,
                        "Origin": {
                            "Airport": {
                                "AirportCode": "MUC",
                                "AirportName": "Franz Josef Strauss",
                                "Terminal": "2",
                                "CityCode": "MUC",
                                "CityName": "Munich",
                                "CountryCode": "DE",
                                "CountryName": "Germany"
                            },
                            "DepTime": "2024-09-13T08:25:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "VCE",
                                "AirportName": "Marco Polo",
                                "Terminal": "",
                                "CityCode": "VCE",
                                "CityName": "Venice",
                                "CountryCode": "IT",
                                "CountryName": "Italy"
                            },
                            "ArrTime": "2024-09-13T09:25:00"
                        },
                        "AccumulatedDuration": 625,
                        "Duration": 60,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": null,
                        "StopPointDepartureTime": null,
                        "Craft": "E95",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "",
                        "FareClassification": {
                            "Type": ""
                        }
                    }
                ]
            ],
            "LastTicketDate": "31AUG24",
            "TicketAdvisory": "TICKETS ARE NON-REFUNDABLE \nLAST TKT DTE 31AUG24  - SEE ADV PURCHASE \n",
            "FareRules": [
                {
                    "Origin": "DEL",
                    "Destination": "MUC",
                    "Airline": "LH",
                    "FareBasisCode": "SNCOWAA",
                    "FareRuleDetail": "",
                    "FareRestriction": "N",
                    "FareFamilyCode": "",
                    "FareRuleIndex": ""
                },
                {
                    "Origin": "MUC",
                    "Destination": "VCE",
                    "Airline": "LH",
                    "FareBasisCode": "SNCOWAA",
                    "FareRuleDetail": "",
                    "FareRestriction": "Y",
                    "FareFamilyCode": "",
                    "FareRuleIndex": ""
                }
            ],
            "AirlineCode": "LH",
            "ValidatingAirline": "LH",
            "FareClassification": {
                "Color": "lightBlue",
                "Type": "Publish"
            }
        },
        "flightDetails": {
            "flight_id": "flight-0-1724838288811",
            "detail": {
                "from": "Delhi (India)",
                "to": "Venice (Italy)",
                "legs": [
                    {
                        "from": "Indira Gandhi International Airport (DEL, India)",
                        "to": "Munich Airport (MUC, Germany)",
                        "duration": 510,
                        "airline": "Lufthansa",
                        "flightNumber": "768",
                        "departure_time": "2024-09-13T02:30:00",
                        "arrival_time": "2024-09-13T07:30:00",
                        "origin_airport_type": "large_airport",
                        "destination_airport_type": "large_airport"
                    },
                    {
                        "from": "Munich Airport (MUC, Germany)",
                        "to": "Venice Marco Polo Airport (VCE, Italy)",
                        "duration": 60,
                        "airline": "Lufthansa",
                        "flightNumber": "9454",
                        "departure_time": "2024-09-13T08:25:00",
                        "arrival_time": "2024-09-13T09:25:00",
                        "origin_airport_type": "large_airport",
                        "destination_airport_type": "large_airport"
                    }
                ]
            }
        }
    }
];


const convertFlightData = (events) => {
    // Assuming events is the array of flight events.
    if (!events || events.length === 0) return null;

    // Find the flight event in the events array (assuming there may be multiple event types).
    const flightEvent = events.find(event => event.type === "flight");

    if (!flightEvent) return null;

    // Extract necessary details from the flight event
    const { flightDetails: { detail:{from,to,legs} } } = flightEvent;

    // Assume `legs` is the array of flight segments provided
    const flightDetails = {
        airlines: [], // Initialize an empty array for airlines
        destination: {},
        departure: {},
        layover: [],
        totalDuration: 0
    };

    

    // Initialize total duration counter
    let totalDuration = 0;

    // Helper functions for formatting date and time
    const formatTime = (datetime) => new Date(datetime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const formatDate = (datetime) => new Date(datetime).toLocaleDateString();


    legs.forEach((flight, index) => {
    // Add airline information if it's the first leg
        if (index === 0) {
            flightDetails.airlines.push({
                name: flight.airline,
                flightNumber: flight.flightNumber
            });

            // Set departure details
            flightDetails.departure = {
                departureTime: formatTime(flight.departure_time),
                date: formatDate(flight.departure_time),
                city: from.split("(")[0].trim()
            };
        }

        // Add to total duration
        totalDuration += flight.duration;

        // If it's the last leg, set the destination details
        if (index === legs.length - 1) {
            flightDetails.destination = {
                arrivalTime: formatTime(flight.arrival_time),
                date: formatDate(flight.arrival_time),
                city: to.split("(")[0].trim()
            };
        } else {
        // Otherwise, add it as a layover
            flightDetails.layover.push({
                duration: flight.duration,
                city: flight.to.split("(")[0].trim()
            });
        }
    });

    // Use the formatDuration function to set totalDuration in flightDetails
    flightDetails.totalDuration = formatDuration(totalDuration);

    return flightDetails;
};

const FlightCard = ({flightEvents}) => {

    const [flightDetails,setFlightDetails] = useState(null);

    useEffect(() => {
        const flight = convertFlightData(dummy);
        setFlightDetails(flight);
    }, [flightEvents]);
    

    return (
        <>
            {flightDetails && (
                <div className="mt-[-20px] mb-3 ml-4 shadow-md  p-4 m-2 bg-white border border-gray-300 h-24 w-[50rem]">
            
                    <div className="p-4">
                        <div className='flex flex-row'>

                            {flightDetails?.airlines.length>0 && flightDetails.airlines.map((a,idx)=>(
                                <div className='flex flex-col mr-7' key={idx} >
                                    <div className='text-lg text-black font-bold'>{a.name}</div>
                                    <div className='text-lg text-indigo-900'>{a.flightNumber}</div>
                                </div>
                            )) }   

                            {flightDetails?.departure && (
                                <div className='flex flex-col items-center ml-4'>
                                    <div className='text-sm font-bold underline'>{ flightDetails.departure.city}</div>
                                    <div className='text-sm'>{flightDetails.departure.date}</div>
                                    <div className='text-sm'>{flightDetails.departure.departureTime}</div>
                                </div>
                            )}
                  

                            {flightDetails.totalDuration && (
                                <div className='flex flex-col items-center'>
                                    <div className='mb-2 ml-5 mr-5 mt-2'>{flightDetails.totalDuration} </div>
                                    <div className='w-16 h-3 ml-5 mr-5'>
                                        {/* <img src={getFlightImage(CommuteData.stopType)}   alt="Flight Type" className="w-12 h-12" />  */}
                                        <img src={LineImage} alt="Line" />
                                    </div>
                                </div>
                            )}
                         

                            {flightDetails?.destination && (
                                <div className='flex flex-col items-center ml-4'>
                                    <div className='text-sm font-bold underline'>{ flightDetails.destination.city}</div>
                                    <div className='text-sm'>{flightDetails.destination.date}</div>
                                    <div className='text-sm'>{flightDetails.destination.arrivalTime}</div>
                                </div>
                            )}
                  

                            <div className='flex flex-row items-center justify-between mr-3'>
                                <div className='h-5 w-5 mr-5 ml-5'><img src={pencil} alt="" /></div>
                                <div className='h-5 w-5 ml-5'><img src={unchecked} alt="" /></div>
                            </div>

                        </div>
                    </div> 

                </div>
            )}
        </>
      
    );
};

export default FlightCard;