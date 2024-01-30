import { useEffect, useState } from "preact/hooks";

interface PathSegment {
  name: string;
  path: string;
}

interface BreadcrumbState {
  showBreadcrumb: boolean;
  pathSegments: PathSegment[];
}

export function useBreadcrumbState(
  homePath: string,
  homeLabel: string,
): BreadcrumbState {
  const [showBreadcrumb, setShowBreadcrumb] = useState(
    globalThis.windowinnerWidth < 1124,
  );
  const [pathSegments, setPathSegments] = useState<PathSegment[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setShowBreadcrumb(globalThis.windowinnerWidth < 1124);
    };

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!showBreadcrumb) {
      return;
    }

    const currentPath = globalThis.windowlocation.pathname;
    const segments = currentPath.split("/").filter((segment) => segment !== "");

    const segmentsWithPaths: PathSegment[] = segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return { name: segment, path };
    });

    setPathSegments([
      { name: homePath, path: homeLabel },
      ...segmentsWithPaths,
    ]);
  }, [homePath, homeLabel, showBreadcrumb]);

  return { showBreadcrumb, pathSegments };
}
