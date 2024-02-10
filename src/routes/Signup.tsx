import { InputGroup } from "@/components"
import { Button } from "@/libs/shadcn/ui/button"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <main>
      <div className="px-default py-8">
        <h2 className="heading text-3xl text-center mb-8">create your account</h2>
        <form onSubmit={() => {}}>
          <div className="flex w-3/4 md:w-2/4 mx-auto flex-col gap-6">
              <InputGroup label="name" inputType="text" />
              <InputGroup label="email" inputType="email" />
              <InputGroup label="password" inputType="password" />
              <InputGroup label="confirm password" inputType="password" />

              <Button size={'lg'} type="submit">Create Account</Button>
          </div>
        </form>
        <div className="flex justify-center mt-8 items-center text-zinc-500">
          <small>Already have an account</small>
          <Button className="text-zinc-700 rounded-none" variant={'link'} size={'sm'}>
            <Link to='/login'>Login</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Signup