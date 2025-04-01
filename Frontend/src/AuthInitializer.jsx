const AuthInitializer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Change from useLocation
  
    useEffect(() => {
      const verifyAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
  
        try {
          const response = await axios.get("https://api.victoryvisas.com//api/victory-visas/admin/me", {
            headers: { Authorization: `Bearer ${token}` }
          });
          dispatch(setAdmin(response.data));
        } catch (error) {
          localStorage.removeItem("token");
          dispatch(logoutAdmin());
          if (window.location.pathname.startsWith("/admin")) {
            navigate("/admin-login"); // Use navigate instead of window.location
          }
        }
      };
  
      verifyAuth();
    }, [dispatch, navigate]);
  
    return null;
  };