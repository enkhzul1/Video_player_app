import { getGoogleUrl } from "@/utils/getGoogleUrl";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <a href={getGoogleUrl(from)}>
        <img
          className="pr-2"
          src={GoogleLogo}
          alt=""
          style={{ height: "2rem" }}
        />
        Continue with Google
      </a>
    </div>
  );
}
