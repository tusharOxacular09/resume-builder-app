import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full bg-nav text-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-8">
        <div className="flex flex-col justify-center">
          <Typography variant="h5" className="mb-6">
            makeMYresume
          </Typography>
          <p className="text-sm">
            Build beautiful, recruiter-tested resumes in a few clicks! Our
            resume builder is powerful and easy to use, with a range of amazing
            functions. Custom-tailor resumes for any job within minutes.
            Increase your interview chances and rise above the competition.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 font-normal text-blue-gray-900 md:mb-0"
          >
            <p>{currentYear} makeMYresume All Rights Reserved.</p>
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <p className="text-sm font-sans">Connect with us...</p>
            <Typography
              as="a"
              target="_blank"
              href="https://github.com/tusharOxacular09/resume-builder-app"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>

            <Typography
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/tushar-kanta-swain-0b89ab263/"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <img src="../images/linkedin.svg" alt="linkedin" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
