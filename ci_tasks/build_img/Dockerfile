FROM phusion/baseimage:0.9.19

# Enable SSH for phusion/base
RUN rm -f /etc/service/sshd/down
RUN /etc/my_init.d/00_regen_ssh_host_keys.sh

ADD deployment/ssh/authorized_keys /root/.ssh/authorized_keys
RUN echo 'root:siema' | chpasswd

# install required system packages
RUN apt-get -y update && \
    apt-get -y install --no-install-recommends openssh-server nginx less vim mc procps &&\
	apt-get purge -y --auto-remove &&\
	apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# nginx config - do not run as a daemon
RUN sed -i '1d' /etc/nginx/nginx.conf && echo "daemon off;\n user root;" >> /etc/nginx/nginx.conf

# == SERVICES ===

RUN mkdir -p /etc/service/nginx && mkdir -p /web/
ADD deployment/bin/nginx.sh /etc/service/nginx/run

# NGINX config
ADD deployment/nginx/boilerplate.conf /etc/nginx/sites-available/boilerplate.conf
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s /etc/nginx/sites-available/boilerplate.conf /etc/nginx/sites-enabled/boilerplate.conf

# WebApp files
ADD build /web/
RUN mkdir -p /web/media && mkdir -p /web/static

WORKDIR /web/

EXPOSE 80 443 22
VOLUME ["/web/media", "/web/static", "/var/log/nginx", "/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d"]

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]