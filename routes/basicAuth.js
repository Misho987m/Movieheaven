function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403)
    return res.send('You need to sign in')
  }

  next()
}

function authRole() {
  return (req, res, next) => {
    if (req.user.role !== 'admin') {
      res.status(401)
      return res.send('Not allowed')
    }

    next()
  }
}

module.exports = {
  authUser,
  authRole
}