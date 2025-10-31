import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/UI/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/UI/table';
// import { Badge } from '../../components/UI/badge';
import { Button } from '../../components/UI/button';
import {  Calculator } from 'lucide-react';
// import { Room, Wall } from '../../types';
import { mockApiCall } from '../../lib/api';
import { PRODUCTS } from '../../lib/constant';
import Navbar from '../Navbar';
import walchilogo from '../../assets/Walchi.png';
import ChatWidget from './ChatBot';

interface Product {
  id: string;
  name: string;
  pricePerSqFt: number;
  description: string;
  features: string[];
}

interface Wall {
  id: string;
  name: string;
  length: number;
  height: number;
  area: number;
  obstacleArea: number;
}

interface Room {
  id: string;
  name: string;
  walls: Wall[];
  selectedProduct?: Product;
  totalArea: number;
  totalCost: number;
}



export default function RoomDetails() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRoomDetails();
  }, []);

  const loadRoomDetails = async () => {
    try {
      // Mock API call with sample room data
      const mockRooms: Room[] = [
        {
          id: 'room-1',
          name: 'Living Room',
          selectedProduct: PRODUCTS[1], // Standard Paint
          totalArea: 320.5,
          totalCost: 9294.5,
          walls: [
            {
              id: 'wall-1',
              name: 'Front',
              length: 12,
              height: 10,
              area: 120,
              obstacleArea: 20,
            },
            {
              id: 'wall-2',
              name: 'Back',
              length: 12,
              height: 10,
              area: 120,
              obstacleArea: 20,
            },
            {
              id: 'wall-3',
              name: 'Right',
              length: 8,
              height: 10,
              area: 80,
              obstacleArea: 20,
            },
          ],
        },
        {
          id: 'room-2',
          name: 'Master Bedroom',
          selectedProduct: PRODUCTS[0], // Premium Paint
          totalArea: 280,
          totalCost: 9800,
          walls: [
            {
              id: 'wall-4',
              name: 'Front',
              length: 14,
              height: 10,
              area: 140,
              obstacleArea: 20,
            },
            {
              id: 'wall-5',
              name: 'Back',
              length: 14,
              height: 10,
              area: 140,
              obstacleArea: 20,
            },
          ],
        },
        {
          id: 'room-3',
          name: 'Kitchen',
          selectedProduct: PRODUCTS[2], // Economy Paint
          totalArea: 150,
          totalCost: 4050,
          walls: [
            {
              id: 'wall-6',
              name: 'Front',
              length: 10,
              height: 9,
              area: 90,
              obstacleArea: 20,
            },
            {
              id: 'wall-7',
              name: 'West Wall',
              length: 6,
              height: 10,
              area: 60,
              obstacleArea: 20,
            },
          ],
        },
      ];

      await mockApiCall(mockRooms, 1000);
      setRooms(mockRooms);
      setSelectedRoom(mockRooms[0]);
    } catch (error) {
      console.error('Failed to load room details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTotalProjectCost = () => {
    return rooms.reduce((total, room) => total + room.totalCost, 0);
  };

  const getTotalProjectArea = () => {
    return rooms.reduce((total, room) => total + room.totalArea, 0);
  };

  if (isLoading) {
    return (
      
      <div className="container mx-auto py-8 px-4">
       
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Calculator className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p>Loading room details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="w-full z-50">
        <Navbar />
      </div>

 <ChatWidget />
    <div className="container mx-auto py-8 px-4 text-cream-800 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Room & Wall Details</h1>
          <p className="mt-2 text-cream-600">Detailed breakdown of all rooms and wall specifications</p>
        </div>

        {/* Project Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{rooms.length}</div>
              <p className="text-sm text-cream-800">Across the project</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {getTotalProjectArea().toFixed(1)} sq.ft
              </div>
              <p className="text-sm text-cream-800">Paint coverage area</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                ₹{getTotalProjectCost().toFixed(2)}
              </div>
              <p className="text-sm text-cream-800">Including materials</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rooms List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Rooms Overview</CardTitle>
                <CardDescription>Select a room to view wall details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedRoom?.id === room.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-black">{room.name}</h3>
                    
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-800 mb-3">
                      <p>Walls: {room.walls.length}</p>
                      <p>Area: {room.totalArea.toFixed(1)} sq.ft</p>
                      <p>Cost: ₹{room.totalCost.toFixed(2)}</p>
                    </div>
                    
                    {/* {room.selectedProduct && (
                      <Badge variant="secondary" className="mt-2">
                        {room.selectedProduct.name}
                      </Badge>
                    )} */}
                   <div className="flex space-x-22">
 

  <Button
    variant="destructive"
    size="sm"
    className="flex items-center justify-center w-25"
    style={{ backgroundColor: "blue" }}
  >
    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
    <span>Pre-Video</span>
  </Button>

  <Button
    variant="destructive"
    size="sm"
    className="flex items-center justify-center w-25"
    style={{ backgroundColor: "blue" }}
  >
    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
    <span>Post Video</span>
  </Button>
   {/* <Button
    variant="destructive"
    size="sm"
    className="flex items-center justify-center space-x-1 w-24"
    style={{ backgroundColor: "red" }}
  >
    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
    <span>Live</span>
  </Button> */}
</div>


                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Wall Details */}
          <div className="lg:col-span-2">
            {selectedRoom ? (
              <Card>
                <CardHeader>
                  <div className='flex justify-between'>
                  <div className='flex justify-start'>
                  <CardTitle>{selectedRoom.name} - Wall Details</CardTitle></div>
                 <div className="flex justify-end">
 <Button
    variant="destructive"
    size="sm"
    className="flex items-center justify-center space-x-1 w-24"
    style={{ backgroundColor: "red" }}
  >
    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
    <span>Live</span>
  </Button>
</div>
</div>
                  <CardDescription>
                    {selectedRoom.selectedProduct?.name} - ₹{selectedRoom.selectedProduct?.pricePerSqFt}/sq.ft
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Wall Name</TableHead>
                        <TableHead>Length (ft)</TableHead>
                        <TableHead>Height (ft)</TableHead>
                        <TableHead>Area (sq.ft)</TableHead>
                        <TableHead className="text-right">Obs Area</TableHead>
                        
                        <TableHead className="text-right">Cost (₹)</TableHead>
                        <TableHead className="text-right">Pre Photo 1</TableHead>
                        <TableHead className="text-right">Pre Photo 2</TableHead>
                        <TableHead className="text-right">Post Photo 1</TableHead>
                        <TableHead className="text-right">Post Photo 2</TableHead>
                        
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedRoom.walls.map((wall) => (
                        <TableRow key={wall.id}>
                          <TableCell className="font-medium">{wall.name}</TableCell>
                          <TableCell>{wall.length}</TableCell>
                          <TableCell>{wall.height}</TableCell>
                          <TableCell>{wall.area.toFixed(1)}</TableCell>
                           <TableCell className="text-right">   {wall.obstacleArea.toFixed(1)}</TableCell>
                           
                          <TableCell className="text-center">
                            ₹{(wall.area * (selectedRoom.selectedProduct?.pricePerSqFt || 0)).toFixed(2)}
                          </TableCell>
                          <TableCell className="text-right">
                            <img src={walchilogo} alt="Pre Photo 1" className="w-10 h-10" />
                          </TableCell>
                          <TableCell className="text-center">
                            <img src={walchilogo} alt="Pre Photo 2" className="w-10 h-10" />
                          </TableCell>
                          <TableCell className="text-center">
                            <img src={walchilogo}  alt="Post Photo 1" className="w-10 h-10" />
                         
                          </TableCell>
<TableCell className="text-center">
                            <img src={walchilogo}  alt="Post Photo 1" className="w-10 h-10" />
                         
                          </TableCell>
                          
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {/* Room Summary */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-3 text-black">Room Summary</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-800">Total Walls:</span>
                        <span className="ml-2 font-medium text-green-400">{selectedRoom.walls.length}</span>
                      </div>
                      <div>
                        <span className="text-gray-800">Total Area:</span>
                        <span className="ml-2 font-medium text-green-400">{selectedRoom.totalArea.toFixed(1)} sq.ft</span>
                      </div>
                      <div>
                        <span className="text-gray-800">Paint Type:</span>
                        <span className="ml-2 font-medium text-green-400">{selectedRoom.selectedProduct?.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-800">Total Cost:</span>
                        <span className="ml-2 font-medium text-lg text-green-400">₹{selectedRoom.totalCost.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-64">
                  <p className="text-gray-500">Select a room to view wall details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}