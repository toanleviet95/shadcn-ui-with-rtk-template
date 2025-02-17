import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 p-6">
      <Card className="max-w-md text-center shadow-lg">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
          <p className="text-sm text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="mt-4" asChild>
            <Link to="/">Go Back Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
