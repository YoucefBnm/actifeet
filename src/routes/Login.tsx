import { InputGroup } from "@/components"
import { Button } from "@/libs/shadcn/ui/button"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <main >
        <div className="px-default py-8">
            <h2 className="heading text-center mb-8 text-3xl">login</h2>

            <form onSubmit={() => {}}>
                <div className="flex w-3/4 md:w-2/4 mx-auto flex-col gap-6">
                    <InputGroup label="email" inputType="email" />
                    <InputGroup label="password" inputType="password" />

                    <Button size={'lg'} type="submit">Login</Button>
                </div>
            </form>

            <div className="flex gap-2 mt-8 text-center w-3/4 md:w-2/4 mx-auto text-zinc-500 flex-col items-center justify-center">
                <small>Create your account for free or if you already a member login to get member's benefits like free delivery, fast checkouts, coupons and descount, our special offers, our newest shoes, and more.</small>
                <Button variant={'outline'} className=" border-zinc-950">
                    <Link className=" text-zinc-950" to='/register'>Register for Free</Link>
                </Button>
            </div>
        </div>
    </main>
  )
}

export default Login