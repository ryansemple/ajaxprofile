﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ajax.Controllers.API
{
    public class ProfileController : ApiController
    {
        public string GetProfile()
        {
            return "Profile retrieved";
        }
    }
}
