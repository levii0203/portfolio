import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const Webthree = ()=>{
    return (

        <div className=" lg:flex md:flex  md:flex-row flex-col lg:px-48 lg:py-12 h-full w-full md:px-28 px-16 md:py-8 py-8 md:space-x-5 bg-black lg:space-x-10 md:space-y-0 space-y-8">
           <Card className="pt-4 lg:h-80 md:h-80 h-54">
                <CardHeader className="md:py-3 py-1 px-4 flex-col items-start">
                    <p className="md:text-xl text-[16px]  uppercase font-semibold text-white">Solidity</p>
                    <div className="py-4">
                        <div className="w-full rounded-full md:h-2 h-1 bg-white">
                            <div className="w-fit h-full  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                                  <p className="text-transparent">ssss sssssssssssssssssss</p>           
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible justify-center items-center bg-gray-600">
                    <Image
                        alt="Card background"
                        className="object-cover  rounded-lg"
                        src="https://www.logo.wine/a/logo/Solidity/Solidity-Logo.wine.svg"
                        width={270}
                    />
                </CardBody>
            </Card>
            <Card className="pt-4 lg:h-80 md:h-80 h-54">
                <CardHeader className="md:py-3 py-1 px-4 flex-col items-start">
                    <p className="md:text-xl text-[16px] uppercase font-semibold text-white">Ethereum</p>
                    <div className="py-4">
                        <div className="w-full rounded-full md:h-2 h-1 bg-gray-600">
                            <div className="w-fit h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                                  <p className="text-transparent"> sssssssssssssssssss</p>           
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible items-center justify-center bg-gray-600">
                    <Image
                        alt="Card background"
                        className="object-cover items-center justify-center md:w-[270px] w-[160px] rounded-xl"
                        src="https://cdn.pixabay.com/photo/2021/12/30/13/46/ethereum-6903942_640.png"
                    
                
                    />
                </CardBody>
            </Card>
            <Card className="pt-4 lg:h-80 md:h-80 h-54">
                <CardHeader className="md:py-3 py-1 px-4 flex-col items-start">
                    <p className="md:text-xl text-[16px] uppercase font-semibold text-white">Metamask</p>
                    <div className="py-4">
                        <div className="w-full rounded-full md:h-2 h-1 bg-white">
                            <div className="w-fit h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                                  <p className="text-transparent"> sssssssssss</p>           
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible items-center justify-center  bg-gray-600">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl md:w-[270px] w-[160px]"
                        src="https://images.ctfassets.net/9sy2a0egs6zh/78HoDbPwuWz8M6er6joJdE/c440f3e5d7262a424f13da69a46e958a/wallet-illo.svg"
                    />
                </CardBody>
            </Card>
        </div>
    );
}
export default Webthree;