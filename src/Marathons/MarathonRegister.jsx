import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AuthUser from '@/Hoocks/AuthUser';
import Lottie from 'lottie-react';
import React from 'react';
import { useParams } from 'react-router';
import marathonRegiste from '../assets/Lottie Files/maratonRegister.json';
import { Button } from '@/components/ui/button';

const MarathonRegister = () => {
  const { id: marathonId } = useParams();

  const { user } = AuthUser();

  console.log(marathonId, user);

  const handelRegister = e => {
    e.preventDefault();
    const form = e.target;
    const facebook = form.facebook.value;
    console.log(facebook);
  };

  return (
    <div className=" max-w-11/12 mx-auto flex h-screen gap-5  justify-center items-center">
      <div>
        <Lottie
          className="w-[600px] h-full"
          animationData={marathonRegiste}
          loop={true}
        />
      </div>
      <div className=" w-1/4 flex justify-center items-center  px-4 md:px-0 ">
        <Card className="w-full mx-auto shadow rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-2xl">
                Registration Marathon Account
              </h1>
              <p className="text-center font-light font-rancho mt-2 dark:text-gray-300 ">
                Enter Your Details Below To Your Account
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handelRegister} className="space-y-4">
              <div>
                <Label className="block w-full mb-2 pl-2">Facebook</Label>
                <input
                  className="dark:border-gray-600 dark:bg-gray-900 w-full font-abel border pl-2 py-2 rounded"
                  type="url"
                  name="facebook"
                  placeholder="Enter Your Facebook Link"
                />
              </div>

              <Button
                className="w-full cursor-pointer text-[18px]"
                type="submit"
              >
                Apply Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarathonRegister;
